let nextId = 1;

export default {
  updateState(state, data) {
    Object.assign(state, data);
  },

  addError(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId++
    });
  },

  deleteError(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    );
  },
}