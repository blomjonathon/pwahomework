import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const openDB = await openDB(DB_NAME, 1);
  const transaction = openDB.transaction(DB_NAME, "readonly");
  const store = transaction.objectStore(DB_NAME);
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log("🚀 - data saved to the database", result.value);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error("getDb not implemented");

initdb();
