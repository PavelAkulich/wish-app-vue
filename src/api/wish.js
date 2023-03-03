export const WishListApi = (instance) => ({
  async getWishList() {
    const { data } = await instance.get("wishList");
    return data;
  },
  async getWishListAll() {
    const { data } = await instance.get("wishList/all");
    return data;
  },
  async getWishItem(id) {
    const { data } = await instance.get("wishList/" + id);
    return data;
  },
  async createWishItem(newWish) {
    const { data } = await instance.post("wishList", newWish, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },
  async updateWishItem(updWish, id) {
    const { data } = await instance.patch(`wishList/${id}`, updWish, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },
  async deleteWishItem(id) {
    const { data } = await instance.delete(`wishList/${id}`);
    return data;
  },
});
