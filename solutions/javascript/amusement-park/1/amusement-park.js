/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  return {
    name,
    age,
    ticketId
  }
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
   visitor["ticketId"] = null; 
  console.log(visitor); 
  return visitor; 
 
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {

  for(let [id, value] of Object.entries(tickets)){
    if(id === ticketId){
      if(value === null){
        return "not sold"; 
      }else{ 
      return `sold to ${value}`; 
      }
    }
  }
  return "unknown ticket id"; 
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
    for(let [id, value] of Object.entries(tickets)){
    if(id === ticketId && value !== null){
      return `${value}`; 
      
    }
  }
  return "invalid ticket !!!"; 
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  const version = visitor["gtc"]?.["version"] ; 
  return version; 
}

// 🔑 Ways to safely access a nested property (visitor.gtc.version)

// Optional chaining (?.)

// const version = visitor.gtc?.version;


// Nullish coalescing with optional chaining

// const version = visitor.gtc?.version ?? undefined;


// Bracket notation with optional chaining

// const version = visitor['gtc']?.['version'];


// Traditional conditional check

// const version = visitor.gtc ? visitor.gtc.version : undefined;


// Nested bracket check

// const version = visitor['gtc'] ? visitor['gtc']['version'] : undefined;


// Destructuring with default value

// const { gtc: { version } = {} } = visitor;


// Logical AND (&&) chaining

// const version = visitor.gtc && visitor.gtc.version;


// in operator check

// const version = ('gtc' in visitor) ? visitor.gtc.version : undefined;


// try...catch safe access (overkill, but works)

// let version;
// try {
//   version = visitor.gtc.version;
// } catch {
//   version = undefined;
// }

