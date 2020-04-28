import { db } from '../firebase/firebase';
import { IContactState } from '../types/home';

export const getContacts = () => {
  return new Promise((resolve, reject) => {
    try {
      db.child('contact').once('value', function(snapshot) {
        resolve(snapshot.val());
      })
    } catch (error) {
      reject(error.message);
    }
  })
}

export const postContact = (contact: IContactState) => {
  return new Promise((resolve, reject) => {
    try {
      db.child('contact').push(contact, function() {
        resolve(contact);
      })
    } catch (error) {
      reject(error.message);
    }
  })
}

export const putContact = (id: string, contact: IContactState) => {
  return new Promise((resolve, reject) => {
    try {
      db.child('contact').child(id).update(contact, function() {
        resolve(contact)
      });
    } catch (error) {
      reject(error.message);
    }
  })
}

export const deleteContact = (id: string) => {
  return new Promise((resolve, reject) => {
    try {
      db.child('contact').child(id).remove(function() {
        resolve();
      })
    } catch (error) {
      reject(error.message);
    }
  })
}