export const categories = {
  data: [
    {
      attributes: {
        title: "women",
      },
    },
    {
      attributes: {
        title: "men",
      },
    },
  ],
};

export const products = {
  data: [
    {
      id: 1,
      attributes: {
        recommended: ["1", "2"],
        image1: {
          data: {
            attributes: {
              url: "/images/men_shirt.webp",
              alternativeText: "Custom Fit Linen Shirt",
              placeholder: "Custom Fit Linen Shirt", // Base64 encoded SVG placeholder image
            },
          },
        },
        title: "Custom Fit Linen Shirt",
        brand: {
          data: {
            attributes: {
              title: "men",
            },
          },
        },
        price: 49.99,
        isNew: true,
        sizes: ["S", "M", "L"],
      },
    },
    {
      id: 2,
      attributes: {
        recommended: ["1", "2"],
        image1: {
          data: {
            attributes: {
              url: "/images/men_suit_4a.webp",
              alternativeText: "Slim Stretch Tailored Jacket",
              placeholder: "Slim Stretch Tailored Jacket", // Base64 encoded SVG placeholder image
            },
          },
        },
        title: "Slim Stretch Tailored Jacket",
        brand: {
          data: {
            attributes: {
              title: "men",
            },
          },
        },
        price: 49.99,
        isNew: true,
        sizes: ["S", "M", "L"],
      },
    },
    {
      id: 3,
      attributes: {
        recommended: ["1", "2"],
        image1: {
          data: {
            attributes: {
              url: "/images/women_dress_3a.webp",
              alternativeText: "V-Neck Gown",
              placeholder: "V-Neck Gown",
            },
          },
        },
        title: "V-Neck Gown",
        brand: {
          data: {
            attributes: {
              title: "women",
            },
          },
        },
        price: 29.99,
        isNew: false,
        sizes: ["XS", "S", "M"],
      },
    },
    {
      id: 4,
      attributes: {
        recommended: ["1", "2"],
        image1: {
          data: {
            attributes: {
              url: "/images/women_jacket_4a.webp",
              alternativeText: "Long Sleeve Floral Jacket",
              placeholder: "Long Sleeve Floral Jacket",
            },
          },
        },
        title: "Long Sleeve Floral Jacket",
        brand: {
          data: {
            attributes: {
              title: "women",
            },
          },
        },
        price: 15.99,
        isNew: true,
        sizes: ["S", "M", "L"],
      },
    },
  ],
};

export const recommendedProducts: any = {
  data: [
    {
      id: 1,
      attributes: {
        image1: {
          data: {
            attributes: {
              url: "/images/men_shirt.webp",
              alternativeText: "Custom Fit Linen Shirt",
              placeholder: "Custom Fit Linen Shirt", // Base64 encoded SVG placeholder image
            },
          },
        },
        title: "Custom Fit Linen Shirt",
        brand: {
          data: {
            attributes: {
              title: "Country Road",
            },
          },
        },
        price: 49.99,
        isNew: true,
        sizes: ["S", "M", "L"],
      },
    },
    {
      id: 2,
      attributes: {
        image1: {
          data: {
            attributes: {
              url: "/images/men_suit_4a.webp",
              alternativeText: "Slim Stretch Tailored Jacket",
              placeholder: "Slim Stretch Tailored Jacket", // Base64 encoded SVG placeholder image
            },
          },
        },
        title: "Slim Stretch Tailored Jacket",
        brand: {
          data: {
            attributes: {
              title: "Ralph Lauren",
            },
          },
        },
        price: 79.99,
        isNew: false,
      },
    },
    {
      id: 3,
      attributes: {
        image1: {
          data: {
            attributes: {
              url: "/images/women_dress_3a.webp",
              alternativeText: "V-Neck Gown",
              placeholder: "V-Neck Gown",
            },
          },
        },
        title: "V-Neck Gown",
        brand: {
          data: {
            attributes: {
              title: "Gant",
            },
          },
        },
        price: 29.99,
        isNew: true,
        sizes: ["XS", "S", "M"],
      },
    },
    {
      id: 4,
      attributes: {
        image1: {
          data: {
            attributes: {
              url: "/images/women_jacket_4a.webp",
              alternativeText: "Long Sleeve Floral Jacket",
              placeholder: "Long Sleeve Floral Jacket",
            },
          },
        },
        title: "Long Sleeve Floral Jacket",
        brand: {
          data: {
            attributes: {
              title: "Country Road",
            },
          },
        },
        price: 15.99,
        isNew: false,
        sizes: ["S", "M", "L"],
      },
    },
  ],
};
