export interface Track {
  id: string;
  name: string;
  duration_ms: number;
  is_playable: boolean;
  track_number: number;
  external_urls: {
    spotify: string
  }
}