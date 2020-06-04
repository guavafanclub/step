// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random Avatar quote to the page.
 */
function addRandomAvatarQuote() {
  const avatarQuotes =
      ['Life happens wherever you are, whether you make it or not.', 'I know you’re not supposed to cry over spilled tea, but it’s just so sad!', 'There are reasons each of us are born. We have to find those reasons.', 'Are you so busy fighting you cannot see your own ship has set sail?'];

  // Pick a random Avatar quote.
  const avatarQuote = avatarQuotes[Math.floor(Math.random() * avatarQuotes.length)];

  // Add it to the page.
  const avatarQuoteContainer = document.getElementById('avatarQuote-container');
  avatarQuoteContainer.innerText = avatarQuote;
}


function getServletContent() {
  console.log('Fetching servlet content.');

  const responsePromise = fetch('/data');

  responsePromise.then(handleResponse);
}


function handleResponse(response) {
  console.log('Handling the response.');

  const textPromise = response.text();

  textPromise.then(addResponseToDom);
}

function addResponseToDom(content) {
  console.log('Adding content to dom: ' + content);

  const contentContainer = document.getElementById('content-container');
  contentContainer.innerText = content;
}
