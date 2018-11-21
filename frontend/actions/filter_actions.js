export const UPDATE_RADI = 'UPDATE_RADI';
export const UPDATE_START_DATE = "UPDATE_START_DATE";
export const UPDATE_END_DATE = "UPDATE_END_DATE";
export const UPDATE_QUERY_SEARCH = "UPDATE_QUERY_SEARCH";
export const UPDATE_QUERY_TYPE = "UPDATE_QUERY_TYPE";

export const updateRadi = (radi) => ({
  type: UPDATE_RADI,
  radi
});

export const updateStartDate = (startDate) => ({
  type: UPDATE_START_DATE,
  startDate
});

export const updateEndDate = (endDate) => ({
  type: UPDATE_END_DATE,
  endDate
});

export const updateQuerySearch = (querySearch) => ({
  type: UPDATE_QUERY_SEARCH,
  querySearch
});

export const updateQueryType = (queryType) => ({
  type: UPDATE_QUERY_TYPE,
  queryType
});
