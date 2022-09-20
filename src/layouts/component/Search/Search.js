import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import { FoodItem } from '~/layouts/component/Items/FoodItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';

const cx = classNames.bind(styles);

function Search() {
  //fake API search result
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const debouceValue = useDebounce(searchValue, 600);

  useEffect(() => {
    //delay call API search when user inputting
    if (!debouceValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debouceValue);

      setSearchResult(result);

      setLoading(false);
    };
    fetchApi();
  }, [debouceValue]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleOnChange = (e) => {
    const valueInput = e.target.value;
    if (valueInput.startsWith(' ')) {
      return;
    }
    setSearchValue(valueInput);
  };

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h5 className={cx('search-title')}>Result</h5>
              {searchResult.map((result) => (
                <FoodItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            onFocus={() => setShowResult(true)}
            ref={inputRef}
            value={searchValue}
            onChange={handleOnChange}
            placeholder="Search favourite foods, destinations ..."
            spellCheck={false}
          />
          <div className={cx('icon-search')}>
            <FontAwesomeIcon icon={faSearch} />
          </div>

          {/* show spinner icon when loading and handle clear icon */}
          {loading && <FontAwesomeIcon className={cx('icon-loading')} icon={faSpinner} />}
          {!!searchValue && !loading && (
            <FontAwesomeIcon
              onClick={handleClear}
              className={cx('icon-clear')}
              icon={faCircleXmark}
            />
          )}
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
