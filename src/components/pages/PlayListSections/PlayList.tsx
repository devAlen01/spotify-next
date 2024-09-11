"use client";
import scss from "./PlayList.module.scss";
import { useGetOnePlaylistQuery } from "@/redux/api/playlists";
import { usePlayerStore } from "@/stores/usePlayerStore";
import moment from "moment";
import { useParams } from "next/navigation";
import { useState } from "react";
import { IoPlay } from "react-icons/io5";
// @ts-ignore
import { ColorExtractor } from "react-color-extractor";

const PlayList = () => {
  const params = useParams();
  const { data, isLoading } = useGetOnePlaylistQuery(String(params.playlistID));
  const [colors, setColors] = useState<string | null>(null);
  const { setTrackUris, setTrackIndex, setActiveUri, activeUri } =
    usePlayerStore();

  const getTrackUris = async (index: number) => {
    const trackUrisFilter = data?.tracks.items.map((item) => item.track.uri);
    setTrackUris(trackUrisFilter!);
    setTrackIndex(index);
  };

  const filterActiveTrack = (uri: string) => {
    const activeTrack = data?.tracks.items.find(
      (item) => item.track.uri === uri
    );
    setActiveUri(activeTrack?.track.uri!);
  };

  const totalMin = moment
    .utc(
      data?.tracks.items.reduce(
        (total, current) => total + current.track.duration_ms,
        0
      )
    )
    .format("m:ss");

  const getColors = (detectedColorCodes: string) => {
    setColors(detectedColorCodes);
  };

  if (isLoading) return null;
  return (
    <div className={scss.PlayList}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div
            style={{
              background: `linear-gradient(${colors?.[0]},rgba(83, 98, 93, 0) 99%)`,
            }}
            className={scss.playlist_info}
          >
            <ColorExtractor getColors={getColors}>
              <img src={data?.images[0].url} alt="image" />
            </ColorExtractor>
            <div className={scss.playlist_data}>
              <h2>{data?.name}</h2>
              <div>
                {data?.owner.display_name}-
                <span className={scss.total_min}>
                  {data?.tracks.total} треков,
                  {totalMin.slice(0, 2)} мин. {totalMin.slice(3)} сек.
                </span>
              </div>
            </div>
          </div>
          <div className={scss.tracks}>
            {data?.tracks.items.map((item, index) => (
              <div
                onClick={() => {
                  filterActiveTrack(item.track.uri);
                  getTrackUris(index);
                }}
                key={item.track.uri}
                className={
                  activeUri === item.track.uri
                    ? `${scss.track} ${scss.active}`
                    : `${scss.track}`
                }
              >
                <div className={scss.track_info}>
                  <span className={scss.index}> {index + 1}</span>
                  <span className={scss.icon_play}>
                    <IoPlay />
                  </span>

                  <img src={item?.track?.album?.images[0]?.url} alt="picture" />
                  <div className={scss.track_title}>
                    <h5>{item.track.name}</h5>
                    <span className={scss.artist}>
                      {item.track.artists[0].name}
                    </span>
                  </div>
                </div>

                <span className={scss.album}>{item.track.album.name}</span>
                <span className={scss.duration}>
                  {moment.utc(item.track.duration_ms).format("m:ss")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayList;
