import API_ENDPOINT from '../../scripts/globals/api-endpoint';

class restaurantApi {
  static async getlistofrestaurant() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailrestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default restaurantApi;
