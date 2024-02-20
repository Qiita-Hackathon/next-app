'use server';

const getDogImageUrl = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    return data.message;
}

const serverGetAdvice = async () => {
    const fetchStartTime = new Date().getTime();
    const res = await fetch('https://api.adviceslip.com/advice/1');
    const fetchEndTime = new Date().getTime();
    const data = await res.json();
    return data.slip.advice;
}

const calcFetchServer = async () => {
    const fetchStartTime = new Date().getTime();
    const res = await fetch('https://api.adviceslip.com/advice/1');
    const fetchEndTime = new Date().getTime();
    const latency = fetchEndTime - fetchStartTime;
    return latency;
}

export { getDogImageUrl, serverGetAdvice, calcFetchServer };