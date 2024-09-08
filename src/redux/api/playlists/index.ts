import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getMyPlaylist: builder.query<
      PLAYLIST.GetPlaylistResponse,
      PLAYLIST.GetPlaylistRequest
    >({
      query: () => ({
        url: "/me/playlists",
        method: "GET",
      }),
    }),
    getOnePlaylist: builder.query<
      PLAYLIST.GetOnePlaylistResponse,
      PLAYLIST.GetOnePlaylistRequest
    >({
      query: (playlist_id) => ({
        url: `/playlists/${playlist_id}
`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMyPlaylistQuery, useGetOnePlaylistQuery } = api;
