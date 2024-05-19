import listingEndTime from "../extra/timeFormat.mjs";

 export function listingTemplateB(listingData) {

  const listing = document.createElement('div');
  listing.classList.add('listing', 'text-white', 'rounded-lg', 'flex', 'flex-col', 'items-center', 'justify-center', 'w-fit', 'transition', 'hover:scale-105', 'py-5');

  const listingImage = document.createElement('img');
  listingImage.src = listingData.media[0]?.url;
  listingImage.alt = listingData.title;
  listingImage.classList.add('listing-image','w-80', 'h-80', 'object-cover', 'rounded-sm', 'shadow-lg', 'mb-5');
  listing.appendChild(listingImage);

  const title = document.createElement('h2');
  title.textContent = listingData.title;
  title.classList.add('listing-title', 'text-lg', 'font-bold', 'mb-2');
  listing.appendChild(title);

  const listingTime = document.createElement('p');
  listingTime.textContent = "Ends in: " + listingEndTime(listingData.endsAt);
  listingTime.classList.add('listing-time', 'text-sm', 'text-gray-400', 'mb-2');
  listing.appendChild(listingTime);

  const currentBid = document.createElement('p');
  currentBid.textContent = "Current Bid: ";

  listing.appendChild(currentBid);

  const attributeButton = document.createElement('a');
  attributeButton.href = `/listing.html?id=${listingData.id}`;
  attributeButton.textContent = 'Bid on Listing';
  attributeButton.classList.add('listing-button', 'text-center', 'bg-orange-200', 'text-black', 'px-3', 'py-1', 'rounded-lg', 'mt-5', 'w-full', 'transition', 'hover:bg-slate-600','hover:text-white','shadow-lg');
  listing.appendChild(attributeButton);

  return listing;
}

export function renderListingTemplate(listingData, parent){
    // parent.innerHTML += listingTemplateA(listingData)

    parent.append(listingTemplateB(listingData))
}

export function renderListingTemplates(listingDataList, parent){
  parent.append(...listingDataList.data.map(listingTemplateB))

}
