function slugify(title) {
    const lowForTitle = title.toLowerCase();
    const splitForTitle = lowForTitle.split(" ");
    const joinForTitle = splitForTitle.join("-")
    return '"' + joinForTitle + '"';
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"