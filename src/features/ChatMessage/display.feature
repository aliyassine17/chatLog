Feature: display the message component with the right fields
  It should receive message props and display the message (image, fullname, email, and message) in addition to the date
 
  Scenario: show image, fullname, email, message and date
    Given fullName is Aly Baba
    Given avatar is null
    Given email is alyBaba@alyBaba.io
    Given message is not the same
    Given timestamp is 09 Feb 2017, 04:27:38
    When pass the props to the component
    Then it should render and display the fields