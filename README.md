## **2) Visualize simple continuous signals**

  a) Configuration of function signal generator to out [Here](https://imgur.com/a/UIp3gI7)
  
  b) Rigol Function Generator video can be found [Here](https://imgur.com/a/YBvrhUo)
  
  c) Emitting PWM video can be found [Here](https://imgur.com/a/ywecla7)



## **3) I<sup>2</sup>C Warmup:**
 
  a. What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on them?
    
    - One of the disadvantages of the two serial communication channels is in its name itself. It can communicate with two devies and onyl those two devices. There is also no clock data, so the devices will have to plan ahead of time the data rate that will be exchanged. 
    
  b. I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL?
    
    - The SDA wire is to transmit the data signal. 
    - The SLA is used for the clock signal 
    
  c. What distinguishes the master and the slaves?
    
    - The master at anytime call upon a 'slave device' and read or write data to the slave using their specific address, while the slave can only read or write data only when the master has called or addressed them. 
    
  d. How are the two types of protocol frames different?
    
    - The address frame will always come first, establishing a new commuincation with a device 
    - After the address has been sent, the data will be sent and placed on the SDA line and read or write data to the master or slave. 
    
  e. What is the most appropriate trigger for capturing an I2C frame on the oscilloscope?
  
  ## **4) First Steps with I<sup>2</sup>C**
  
  a.  What frame did you capture?
    
    - We captured the address frame. 
  
  b. What does the I2C write function do when there is nothing connected?
    
    - The I2C will try to complete the function but when the corresponding address or device is not found nothing will happen. 
    
  c. Is there a difference in what you capture if you write a number to one of the internal device addresses?
     
     - No there was no difference when writing to another internal device. 
     
  # ii) 
   
   a. Try all three addresses: 
   
   b. Try signed and unsigned type integers: 
   
      - Shows I<sup>2</sup>C reading signed integers: [here](https://imgur.com/gallery/jACnoeq)
      - Shows I<sup>2</sup>C reading unsigned integers: [here](https://imgur.com/gallery/0gBqtHB)
      
   c. What values do you read? 
   
      - Values we recieved when reading from the accelerometer: [Video here](https://imgur.com/gallery/NHZxBIj)
      - Values we recieved when reading fromt he magnetometer: [Video here](https://imgur.com/gallery/STNIS40) 
      
   d. Can you get different values by moving the micro:bit around.
    
      - Yes we got different values when physically moving the microbit reacting from the accelerometer readings. 
     
  
  
