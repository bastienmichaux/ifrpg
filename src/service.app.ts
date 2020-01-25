export class AppService {
  // clear screen
  static clear(): void {
    const app = document.getElementById('app');
    while (app.firstChild) {
      app.removeChild(app.firstChild)
    }
  }
}
