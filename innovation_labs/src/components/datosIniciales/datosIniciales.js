import React, { Component } from 'react';
import datosProjectos from "./datosProjectos";

const strapi = "http://localhost:1337";

async function request(url, method, data) {
  const response = await fetch(`${strapi}${url}`, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  const jsonResponse = await response.json();

  return jsonResponse.data;
}

export function add(data) {
  return request('/projects', 'POST', data);
}

export function read() {
  return request('/projects', 'GET');
}

// render(){
//   datosProjectos.projectList.map((key) => {
//     return add(key)
//   })

// }

export default datosIniciales;