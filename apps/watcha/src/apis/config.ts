export const getApiOptions = () => {
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  return {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";
