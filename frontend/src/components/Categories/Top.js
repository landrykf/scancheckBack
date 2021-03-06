import React from "react";

function Top({ topManga }) {
  return (
    <div>
      <aside>
        <div className="container">
          <h3>Cars Manga</h3>
          {topManga.map((manga) => (
            <div key={manga.mal_id} className="top-card">
                <div className="top-card">
              <img src={manga.image_url} alt="" />
              {manga.title}

                </div>
            </div>
          ))}
        </div>
      </aside>
      )
    </div>
  );
}

export default Top;
