export default {
  methods: {
    formattedNumber(value) {
      const number = 100;

      return (
        value !== undefined &&
        (value > number ? Math.round(value) : value.toFixed(4))
      );
    }
  }
}