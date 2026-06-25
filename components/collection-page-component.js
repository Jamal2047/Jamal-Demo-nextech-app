export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');

    return {
      itemsStore,
    };
  },
  template: /* html */ `
    <section class="container py-4 text-white fw-bold collection-page-component text-center">
      <div class="p-3 border border-2 border-white bg-black mb-3 d-inline-block">
        <div class="d-flex justify-content-center align-items-center gap-2">
          <h1 class="h3 mb-0">Space Topics</h1>
          <span class="badge text-bg-dark border">{{ itemsStore.items.length }} topics</span>
        </div>
      </div>

      <div class="p-3 border border-2 border-white bg-black mb-3 d-inline-block">
        <p class="text-white mb-0">Click on any topic to learn more about stars, planets, and black holes!</p>
      </div>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading items...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="itemsStore.items.length === 0" class="alert alert-warning" role="alert">
        No items found in the dataset.
      </div>

      <div v-else class="row g-3">
        <div class="col-12 col-md-6 col-lg-4" v-for="item in itemsStore.items" :key="item.id">
          <article class="card h-100 shadow-sm border-0">
            <img
              v-if="item.imageUrl"
              :src="item.imageUrl"
              :alt="item.name"
              class="card-img-top collection-card-image object-fit-cover" />
            <div
              v-else
              class="collection-card-image d-flex align-items-center justify-content-center bg-light text-muted">
              No image available
            </div>

            <div class="card-body d-flex flex-column text-center">
              <div class="d-flex flex-column align-items-center mb-2">
                <h2 class="h5 card-title mb-1">{{ item.name }}</h2>
                <span class="badge text-bg-primary">{{ item.category || 'General' }}</span>
              </div>

              <p class="card-text text-muted flex-grow-1 collection-description">
                {{ item.description || 'No description available.' }}
              </p>

              <p class="small mb-3"><strong>Location:</strong> {{ item.location || 'N/A' }}</p>

              <div class="d-grid">
                <router-link :to="'/items/' + item.id" class="btn btn-outline-secondary btn-sm">
                  View details
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
};
