import React from 'react';

export default function SearchMovie() {

    return (
        <form className="form">
          <label className="label" htmlFor="query">Movie name</label>
          <input type="text" name="queury" placeholder="search a movie.."/>
          <button type="submit" className="button">Submit</button>
        </form>
    );

}