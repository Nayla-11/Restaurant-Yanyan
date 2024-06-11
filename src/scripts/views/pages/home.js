import restaurantApi from '../../../public/data/restaurant-source';

const Home = {
  async render() {
    return `
        <div class="hero-image">
      <img src="./images/heros/hero-image_1.jpg" alt="Hero Image">
  </div>

  <h1 id="content-start">EXPLORER RESTAURANT</h1>

  <div class="container" id="restaurant-list"></div>
        
      `;
  },
  async afterRender() {
    const restaurants = await restaurantApi.getlistofrestaurant();
    console.log(restaurants);
    // Fungsi ini akan dipanggil setelah render()
    // const createRestaurantCard = (restaurant) => `
    // <div class="card">
    //   <div class="card__header">
    //   <article tabindex="0" class="card">
    //     <div class="card-img-container">
    //       <span class="card-place">${restaurant.city}</span>
    //       <img class="card-image" alt="${restaurant.name}" src="${restaurant.pictureId}">
    //       <span class="card-rating">
    //         <i title="ratings"></i>
    //         &starf; <span>${restaurant.rating}</span>
    //       </span>
    //     </div>
    //     <div class="card-content">
    //       <p class="card-content-title">${restaurant.name}</p>
    //       <p class="card-content-description">${restaurant.description}</p>
    //     </div>
    //     </div>
    //     </div>
    //   </article>
    // `;

    // Ambil elemen container
    // const container = document.getElementById('restaurant-list');

    // Ambil data dari file JSON menggunakan fetch
    // fetch('./data/DATA.json') // Gunakan URL relatif
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // Tampilkan daftar restoran
    //     data.restaurants.forEach((restaurant) => {
    //       const cardHTML = createRestaurantCard(restaurant);
    //       container.innerHTML += cardHTML;
    //     });
    //   })
    //   .catch((error) => {
    //     console.error('There was a problem with your fetch operation:', error);
    //   });
  },
};

export default Home;
