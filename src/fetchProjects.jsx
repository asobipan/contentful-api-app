import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENT_DELIVERY_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const { items } = await client.getEntries({
        content_type: "projects",
      });

      const newItems = items.map((item) => {
        const fields = item.fields;

        return {
          image: fields.image.fields.file.url,
          alt: fields.image.fields.title,
          title: fields.title,
          url: fields.url,
        };
      });

      setProjects(newItems);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
