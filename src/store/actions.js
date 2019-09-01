import EventService from '../services/eventService';

export default {
  getData({
    commit,
  }, currency) {
    return EventService.getEvents(currency)
      .then(({
        data
      }) => {
        commit('updateState', {
          [data.target]: data.rates,
        });
      })
      .catch(error => {
        console.log(error);
        const notification = {
          type: 'error',
          message: `There was a problem fetching events: ${error}`
        }

        commit('addError', notification);
      });
  },
}