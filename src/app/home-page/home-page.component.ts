import { Component, HostListener, OnInit } from '@angular/core';

export class Reference{
  constructor(
    public text: String,
    public person: String,
    public title: String,
    public image: String
  ){}
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {

  references: Reference[] = [new Reference("Reference 11 But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.", "Tim Berners-Lee", "HTTP(Hypertext transfer protocol).", "assets/images/tim.jpg"),
                            new Reference("Referenece 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", "James Gosling", "Java programming language.", "assets/images/gosling.jpg"),
                            new Reference("Reference 2 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.", "Linus Torvalds", "Creator of linux and git.", "assets/images/linus.jpg"),
                            new Reference("Reference 3 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of", "Steve Jobs", "Co-founder of Apple inc.", "assets/images/jobs.jpg"), 
                            new Reference("Reference 4 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the", "Steve Wozniak", "Co-founder of Apple inc.", "assets/images/wozniak.jpg"),
                            new Reference("Reference 5 But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.", "Jeff Bezos", "Founder of Amazon.", "assets/images/bezos.jpeg"),
                            new Reference("Reference 6 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of", "Bill Gates", "Founder of Microsoft.", "assets/images/gates.jpg"),
                            new Reference("Reference 7 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.", "Larry Page", "Co-founder of Google.", "assets/images/page.jpg"),
                            new Reference("Reference 8 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.", "Elon Musk", "CEO at Tesla, Twitter.", "assets/images/musk.jpg"),
                            new Reference("Reference 9 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the", "Mark Zuckerberg", "Co-founder of Meta(Facebook).", "assets/images/mark.jpeg"),
                            new Reference("Referenece 10 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", "Dennis Ritchie", "Creator of 'C' programming language.", "assets/images/dennis.jpg"),
                          ]

 /*referencesCounter*/ i = 0

  currentReference: Reference = this.references[this.i];
  
  changeReference(id:number){
    this.i = id
    this.currentReference = this.references[this.i];
    document.getElementById("reference")!.animate([
      // keyframes
       { opacity: 0 },
       { opacity: 1 }
    ], {
      // timing options
      duration: 300,
      
    });
    document.getElementById("referencePerson")!.animate([
      // keyframes
       { opacity: 0 },
       { opacity: 1 }
    ], {
      // timing options
      duration: 300,
      
    });
    document.getElementById("referencePersonStatus")!.animate([
      // keyframes
       { opacity: 0 },
       { opacity: 1 }
    ], {
      // timing options
      duration: 300,
      
    });
    document.getElementById("refImage")!.animate([
      // keyframes
       { opacity: 0 },
       { opacity: 1 }
    ], {
      // timing options
      duration: 500,
      
    });
  }
}
