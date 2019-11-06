# smartevac

project made for HackGT 5

This document lists all of the goals of this application and all of the facets
including the stretch goals and the bare minimum required to develop an
application.


The goal of this application is to develop a smart application that can be
used by schools or companies in the event of a required evacuation that may be
caused by a school shooting, fire, etc. 

Below is a list of all of the different aspects of the application

- A client side service that can be used to enter in a map of the
  building/school along with rooms. 
  - Should be able to draw in a map and input scale
  - Stretch goal - enter in a picture and auto recognize the map layout

- A user side application that can be used to report on the state of the
  building and potential points to avoid along with an automatic safe route
  generator based on current location. 
  - The implementationof the safe route should use djikstra's algorithm to
    figure out the shortest route, but it should eliminate all paths that
    intersect with the danger

- Mobile App and Web client side. Web for admin and police access to the
  scene.   

- Check in system for admin to declare individuals as safe or not or for
  allowing students to declare safety

- Admin system that allows administrators to lock out certain individuals to
  the service.  
 
- Security auditing service that an organization can use to determine if there
  is any possiblity of having no safe routes out of the school. 

Bare essentials for the hackathon

- Make a drawing application for the map
- Make a system to report danger
- Allow the application to determine a route of safety

