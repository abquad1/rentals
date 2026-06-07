'use client';
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IoSearchSharp } from 'react-icons/io5';

const MAPTILER_KEY = process.env.NEXT_PUBLIC_MAPTILER_KEY!;
(mapboxgl as any).accessToken = MAPTILER_KEY;

const MAP_STYLES: Record<string, string> = {
  all:       `https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_KEY}`,
  streets:   `https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_KEY}`,
  satellite: `https://api.maptiler.com/maps/satellite/style.json?key=${MAPTILER_KEY}`,
  hybrid:    `https://api.maptiler.com/maps/hybrid/style.json?key=${MAPTILER_KEY}`,
  outdoors:  `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${MAPTILER_KEY}`,
};



const DEFAULT_CENTER: [number, number] = [8.6753, 9.0820];
const DEFAULT_ZOOM = 6; 

export default function Jumbotron() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef           = useRef<mapboxgl.Map | null>(null);
  const markerRef        = useRef<mapboxgl.Marker | null>(null);

  const [mapStyle, setMapStyle]     = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  // Initialise map once
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  // Switch style when dropdown changes
  useEffect(() => {
    mapRef.current?.setStyle(MAP_STYLES[mapStyle] ?? MAP_STYLES.all);
  }, [mapStyle]);

  // Neighbourhood search via Mapbox Geocoding API
  const handleSearch = async () => {
    const query = searchInput.trim();
    if (!query) return;

    setIsSearching(true);
    setSearchError('');

    try {
  
      const res  = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query + ', Nigeria')}&format=json&limit=1`,
        { headers: { 'Accept-Language': 'en' } }
      );
      const data = await res.json();

      if (!data.length) {
        setSearchError('Neighbourhood not found. Try a different name.');
        return;
      }


      const lat = parseFloat(data[0].lat);
      const lng = parseFloat(data[0].lon);
      
      const map = mapRef.current;
      if (!map) return;

      // Remove old marker
      markerRef.current?.remove();

      // Add new marker
      markerRef.current = new mapboxgl.Marker({ color: '#3b82f6' })
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup().setText(data[0].display_name))
        .addTo(map);

      map.flyTo({ center: [lng, lat], zoom: 14, duration: 1500 });
    } catch {
      setSearchError('Search failed. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="relative">
      <div className="md:flex md:items-center gap-x-10 w-[78%] m-auto md:pt-32 py-32">

        {/* Headline */}
        <div className="w-full md:w-[70%]">
          <h1 className="md:text-6xl text-3xl text-white w-[90%]">
            The Most Affordable Place To Stay in the San Francisco Bay Area
          </h1>
        </div>

        {/* Map + controls */}
        <div className="w-full md:w-[32%]">

          {/* Mapbox container */}
          <div
            ref={mapContainerRef}
            className="rounded-md w-full md:h-[300px] h-[200px] mt-4 md:mt-0 overflow-hidden"
          />

          {/* Search bar */}
          <div className="flex bg-gray-100 rounded-md h-16 px-2 py-2 w-full mt-4">

            {/* Style selector */}
            <div className="w-[35%]">
              <select
                className="h-12 w-full border border-gray-200 px-2 rounded-bl-md rounded-tl-md text-sm"
                value={mapStyle}
                onChange={(e) => setMapStyle(e.target.value)}
              >
                <option value="all">All types</option>
                <option value="streets">Streets</option>
                <option value="satellite">Satellite</option>
                <option value="hybrid">Hybrid</option>
                <option value="outdoors">Outdoors</option>
              </select>
            </div>

            {/* Neighbourhood input */}
            <div className="flex-1">
              <input
                className="h-12 w-full border border-gray-200 px-2 text-sm"
                type="text"
                placeholder="Neighbourhood"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            {/* Search button */}
            <div>
              <button
                className="h-12 bg-blue-500 w-10 p-3 rounded-tr-md rounded-br-md disabled:opacity-60"
                onClick={handleSearch}
                disabled={isSearching}
                aria-label="Search neighbourhood"
              >
                <IoSearchSharp className="text-xl text-white" />
              </button>
            </div>
          </div>

          {/* Error message */}
          {searchError && (
            <p className="text-red-400 text-xs mt-1 px-1">{searchError}</p>
          )}
        </div>
      </div>
    </div>
  );
}

