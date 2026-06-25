export default {
  name: 'landing-page-component',
  template: /* html */ `
    <div class="container py-4 text-dark fw-bold landing-page-component">
      <div class="p-4 border border-2 border-dark bg-white mb-4 text-center">
        <h1 class="mb-3">🚀 Space Explorer</h1>
        <p class="lead mb-0">Discover amazing facts about planets, stars, and black holes!</p>
      </div>

      <div class="p-4 border border-2 border-dark bg-white mb-4 text-center">
        <router-link to="/items" class="btn btn-primary explore-topic-button mb-0"><i class="bi bi-list-check me-1"></i>Explore Space Topics</router-link>
      </div>

      <div class="p-4 border border-2 border-dark bg-white mb-4 text-center">
        <h2 class="h4 mb-3">What You'll Learn</h2>
        <p>
          Welcome to Space Explorer! This app is for anyone interested in space who wants to learn fun and fascinating facts about our universe. Explore different planets in our solar system, discover incredible stars that light up the night sky, and learn about mysterious black holes.
        </p>
      </div>

      <div class="p-4 border border-2 border-dark bg-white text-center">
        <p class="mb-0">
          Click on any topic in the collection to read detailed information. Perfect for curious minds who want to understand more about what's out there in space!
        </p>
      </div>
    </div>
  `,
};
