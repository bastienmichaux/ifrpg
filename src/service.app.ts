export class AppService {
  static clear(): void {
    const app = document.getElementById('app');
    while (app.firstChild) {
      app.removeChild(app.firstChild)
    }
  }
}
