import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PeopleFilters } from './PeopleFilters';
import { Loader } from './Loader';
import { PeopleTable } from './PeopleTable';
import { getPeople } from '../api';
import { Person } from '../types';

export const PeoplePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFinish, setIsLoadingFinish] = useState(false);
  const [people, setPeople] = useState<Person[] | []>([]);
  const [hasLoadingError, setHasLoadingError] = useState(false);

  const { slug = '' } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getPeople()
      .then(res => {
        setPeople(res.map(person => ({
          ...person,
          mother: res.find(mother => mother.name === person.motherName) || null,
          father: res.find(father => father.name === person.fatherName) || null,
        })));
      })
      .catch(() => setHasLoadingError(true))
      .finally(() => {
        setIsLoading(false);
        setIsLoadingFinish(true);
      });
  }, []);

  return (
    <>
      <h1 className="title">People Page</h1>

      <div className="block">
        <div className="columns is-desktop is-flex-direction-row-reverse">
          <div className="column is-7-tablet is-narrow-desktop">
            <PeopleFilters />
          </div>

          <div className="column">
            <div className="box table-container">
              {isLoading && (<Loader />)}

              {hasLoadingError && (
                <p data-cy="peopleLoadingError">Something went wrong</p>
              )}

              {people.length === 0 && isLoadingFinish && (
                <p data-cy="noPeopleMessage">
                  There are no people on the server
                </p>
              )}

              <p>There are no people matching the current search criteria</p>

              {isLoadingFinish && (
                <PeopleTable
                  people={people}
                  activeSlag={slug}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
