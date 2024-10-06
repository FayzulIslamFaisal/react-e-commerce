export const getCountriesData = async () => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,flags`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`Failed to fetch countries data: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching countries data:", error);
    throw error;
  }
};

export const getCountriesDetailData = async (name) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true&fields-name, population, region, subregion, capital, tld, currencies, languages, borders,flags`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`Failed to fetch countries data: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching countries data:", error);
    throw error;
  }
};
