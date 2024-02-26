import qucharaServer from "@/api/server";
import { Collection } from "@/interfaces/collections";
import { ServerResponse } from "@/interfaces/server";


export const getDocument = async <T>(collection: Collection, id: string) => {
  try {
    const { data } = await qucharaServer.post<ServerResponse<T>>(
      '/query/get-unique-by-id',
      { collection, id }
    );
    return data.data!;
  } catch (error: any) {
    throw new Error('Error en la consulta a firestore', error.message);
  }
};





