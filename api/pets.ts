import instance from ".";
const getAllPets = async () => {
  const response = await instance.get("/pets");
};
const getPetById = async (id: string) => {
  const response = await instance.get(`/pets/${id}`);
  return response.data;
};
export { getAllPets, getPetById };
