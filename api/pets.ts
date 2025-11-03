import instance from ".";
const getAllPets = async () => {
  const response = await instance.get("/pets");
  return response.data;
};
const getPetById = async (id: string) => {
  const response = await instance.get(`/pets/${id}`);
  return response.data;
};
const createPet = async (
  name: string,
  image: string,
  type: string,
  adopted: string
) => {
  const response = await instance.post("/pets", { name, image, type, adopted });
  return response.data;
};
const deletePet = async (id: string) => {
  const response = await instance.delete(`/pets/${id}`);
  return response.data;
};
export { createPet, deletePet, getAllPets, getPetById };
