const PORT = 3000;
const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const dataFilePath = path.join(__dirname, "data.txt");

(async () => {
  try {
    await fs.access(dataFilePath);
  } catch {
    await fs.writeFile(dataFilePath, JSON.stringify([]));
  }
})();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  res.setHeader("Content-Type", "application/json");

  // Обработка GET запроса на корневой маршрут
  if (url === "/" && method === "GET") {
    res.end(JSON.stringify({ message: "Сервер работает" }));
    return;
  }

  if (url === "/items" && method === "GET") {
    try {
      const data = await fs.readFile(dataFilePath, "utf8");

      if (!data || data.trim() === "") {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: "Файл пуст, данных нет" }));
        return;
      }

      const items = JSON.parse(data);
      res.end(JSON.stringify(items));
    } catch (err) {
      //   console.error("Ошибка чтения файла:", err);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "Не удалось прочитать данные" }));
    }
    return;
  }

  if (url.match(/\/items\/\d+/) && method === "GET") {
    const id = parseInt(url.split("/")[2]);

    try {
      const data = await fs.readFile(dataFilePath, "utf8");
      const items = JSON.parse(data);
      const item = items.find((item) => item.id === id);

      if (item) {
        res.end(JSON.stringify(item));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Элемент с таким id не найден" }));
      }
    } catch (err) {
      //   console.error("Ошибка чтения файла:", err);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "Не удалось прочитать данные" }));
    }
    return;
  }

  if (url === "/items" && method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const newItem = JSON.parse(body);
        const data = await fs.readFile(dataFilePath, "utf8");
        const items = data.trim() ? JSON.parse(data) : [];

        const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
        newItem.id = newId;
        items.push(newItem);

        await fs.writeFile(dataFilePath, JSON.stringify(items, null, 2));

        res.statusCode = 201;
        res.end(JSON.stringify(newItem));
      } catch (err) {
        // console.error("Ошибка обработки запроса:", err);
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "Некорректные данные" }));
      }
    });
    return;
  }

  if (url.match(/\/items\/\d+/) && method === "PUT") {
    const id = parseInt(url.split("/")[2]);
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const updatedData = JSON.parse(body);
        const data = await fs.readFile(dataFilePath, "utf8");
        const items = data.trim() ? JSON.parse(data) : [];
        const itemIndex = items.findIndex((item) => item.id === id);

        if (itemIndex === -1) {
          res.statusCode = 404;
          res.end(JSON.stringify({ error: "Элемент с таким id не найден" }));
          return;
        }

        items[itemIndex] = { ...items[itemIndex], ...updatedData };
        await fs.writeFile(dataFilePath, JSON.stringify(items, null, 2));

        res.statusCode = 200;
        res.end(JSON.stringify(items[itemIndex]));
      } catch (err) {
        // console.error("Ошибка обработки запроса:", err);
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "Некорректные данные" }));
      }
    });
    return;
  }

  if (url.match(/\/items\/\d+/) && method === "DELETE") {
    const id = parseInt(url.split("/")[2]);

    try {
      const data = await fs.readFile(dataFilePath, "utf8");
      let items = JSON.parse(data);

      const itemIndex = items.findIndex((item) => item.id === id);

      if (itemIndex === -1) {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Элемент с таким id не найден" }));
        return;
      }

      const deletedItem = items.splice(itemIndex, 1)[0];

      await fs.writeFile(dataFilePath, JSON.stringify(items, null, 2));

      res.statusCode = 200;
      res.end(JSON.stringify(deletedItem));
    } catch (err) {
      //   console.error("Ошибка обработки запроса:", err);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "Не удалось удалить элемент" }));
    }
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ error: "Неверный запрос" }));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
