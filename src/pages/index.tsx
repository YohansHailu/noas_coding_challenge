import SearchBar from "@/components/SearchBar";
import ImageGallery from "react-image-gallery";
import { useRef, useState, useEffect } from "react";
import { fetchAudio, fetchImages } from "./utils/api";
import { AudioPlayer } from "@/components/AudioPlayer";


export default function Home() {

  let [searchedImages, setSearchedImages] = useState<any[]>([]);
  let [searchedAudioUrl, setSearchedAudioUrl] = useState<string>('');

  const galleryRef = useRef(null);
  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event: any) => {
      if (event.deltaY < 0 && searchBarRef.current) {
        searchBarRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (event.deltaY > 0 && galleryRef.current) {
        galleryRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);


  function searchHandler(searchInput: string) {
    if (searchInput.length < 3) {
      return;
    }

    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    fetchImages(searchInput).then((images) => {
      setSearchedImages(images.filter((image) => !image.displayLink.includes('facebook')).map((image) => {
        return {
          original: image.link,
          thumbnail: image.link,
        };
      }));
    })

    fetchAudio(searchInput).then((audio) => {
      setSearchedAudioUrl(audio);
    })
  }


  return (
    <main>
      <div ref={searchBarRef} id="searchbar" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <SearchBar searchHandler={searchHandler} />
      </div>
      <div ref={galleryRef} id="gallery" className="gallery" style={{ height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ width: "80vw", borderRadius: "10px", overflow: "clip", margin: "25vw" }}>
          <ImageGallery showPlayButton={false} showBullets={true} items={searchedImages} onErrorImageURL="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
      {searchedAudioUrl ? <AudioPlayer videoId={searchedAudioUrl} autoPlay={true} /> : "No audio"}
    </main>
  );
}
