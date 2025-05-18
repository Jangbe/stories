export default class Misc404 {
    async render() {
        return `
      <section class="error-container">
        <h1>404</h1>
        <p>Maaf, halaman yang kamu cari tidak ada.</p>
        <a href="#/">Go Back Home</a>
      </section>
    `;
    }

    afterRender() {

    }

}
