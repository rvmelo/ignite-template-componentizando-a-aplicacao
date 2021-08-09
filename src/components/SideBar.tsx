import { useState } from "react";
import { api } from "../services/api";

import { Button } from '../components/Button';
import { memo } from "react";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton(id: number): void;
}

export function SideBarComponent({genres, selectedGenreId, handleClickButton}: SideBarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )

}

export const SideBar = memo(SideBarComponent, (previousProps, nextProps) => {
  return Object.is(previousProps, nextProps)
})