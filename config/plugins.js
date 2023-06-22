module.exports = ({ env }) => ({
    // ...
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          movie: {
            field: 'slug',
            references: 'Title',
          },
        },
      },
    },
    // ...
  });