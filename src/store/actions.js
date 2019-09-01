import EventService from '../services/eventService';

export default {
  getData({
    commit
  }, currency) {
    return EventService.getEvents(currency)
      .then(({
        data
      }) => {
        commit('updateState', {
          [data.target]: data.rates,
        });
      })
  },
}