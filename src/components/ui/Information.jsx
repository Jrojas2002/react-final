import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAnotherMemory from '../../memory2';

const Information = () => {
  const { movie, loading } = useAnotherMemory();

  return (
    <>
    {loading ? (
        <FontAwesomeIcon className="fa-spinner--2" icon="spinner" />
      ) : (
        movie.map((type) => (
          <>
            <div className="info__details--head">
              <span>
                <b className="blue">Title:</b> {type.Title}
              </span>
              <span>
                <b className="blue">Released:</b> {type.Released}
              </span>
              <span>
                <b className="blue">Runtime:</b> {type.Runtime}
              </span>
              <span>
                <b className="blue">imdb Rating:</b> {type.imdbRating} /
                10
              </span>
              <span>
                <b className="blue">Director:</b> {type.Director}
              </span>
              <span>
                <b className="blue">Box Office:</b> {type.BoxOffice}
              </span>
              <b className="blue">Awards:</b> {type.Awards}
            </div>
            <br />
            <div className="info__details--para">
              <p className="info__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam cupiditate facilis, totam nisi quo dolore
                consectetur sint quaerat reprehenderit fuga! Molestias
                velit ut reiciendis, fugiat sed laboriosam consequuntur
                facere tenetur!
              </p>
              <br />
              <p className="info__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam cupiditate facilis, totam nisi quo dolore
                consectetur sint quaerat reprehenderit fuga! Molestias
                velit ut reiciendis, fugiat sed laboriosam consequuntur
                facere tenetur!
              </p>
            </div>
          </>
        ))
      )}
      </>
  )
}

export default Information