/* module that provides a function that provides default values which can be
provided to the post request to the api. The user may not have any details for certain
fields of the form. I therefore needed values for the not required fields.
I have done this so I do not have any null values submitted to my postgres database */
export default function defaultFormValues(values) {
  const formValuesMap = [
    { name: values.name },
    { category: values.category },
    { description: values.description },
    { image: values.image },
    { weblink: values.weblink },
    { email: values.email },
    { telephone: values.telephone },
    { address: values.address },
    { rcgpCategory: values.rcgpCategory },
    { postcode: values.postcode },
  ];
  const formValues = formValuesMap.map((key) => {
    if (!Object.values(key)[0]) {
      switch (Object.keys(key)[0]) {
        case 'name':
          return '';
        case 'description':
          return '';
        case 'image':
          return 'https://dummyimage.com/100x100/000/fff.png&text=service+image';
        case 'telephone':
          return '';
        case 'email':
          return 'noemail@nomail.invalid';
        case 'weblink':
          return 'https://www.nhs.uk/';
        default:
          return 'not available';
      }
    }
    return Object.values(key)[0];
  });
  return formValues;
}
