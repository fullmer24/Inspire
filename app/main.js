import { AuthorController } from "./Controllers/AuthorController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  imageController = new ImageController();
  weatherController = new WeatherController();
  quoteController = new QuoteController();
  authorController = new AuthorController();
  todosController = new TodosController();
}

window["app"] = new App();
