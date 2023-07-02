import { FunctionComponent, useEffect, useState } from "react";

interface AlbumsProps {}

const Albums: FunctionComponent<AlbumsProps> = () => {
  let [isPending, setIsPending] = useState<boolean>(true);
  let [albums, setAlbums] = useState<any>([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((albums) => {
          setAlbums(albums);
          setIsPending(false);
        })
        .catch((err) => console.log(err));
    }, 2000);
  }, []);
  return (
    <>
      {isPending && (
        <div className="spinner-border text-primary" role="status"></div>
      )}
      {albums.length && (
        <table className="table">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album: any) => (
              <tr key={album.id}>
                <td>{album.userId}</td>
                <td>{album.id}</td>
                <td>{album.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Albums;
