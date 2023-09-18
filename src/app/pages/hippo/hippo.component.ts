import { Component, OnInit, ElementRef,Renderer2  } from '@angular/core';
declare var gsap: any;
declare var Power2: any;
@Component({
  selector: 'app-hippo',
  templateUrl: './hippo.component.html',
  styleUrls: ['./hippo.component.scss']
})
export class HippoComponent implements OnInit {
  private mouthOpen: any;
  private earWiggle: any;
  constructor(private elementRef: ElementRef,private renderer: Renderer2) {}

  ngOnInit() {
    // --------------
    // Hover animaton
    // --------------

    const mouthSpeed = 0.3;
    const easeType = Power2.easeOut;
    const mouthOpen = gsap.timeline({ paused: true });
    mouthOpen.to('.mouth-back', {duration: mouthSpeed, ease: easeType, y: -70}, 0);
    mouthOpen.to('.tongue', {duration: mouthSpeed * 1.5, ease: easeType, y: -70}, 0);
    mouthOpen.to('.teeth', {duration: mouthSpeed, ease: easeType, y: -70, scaleY: 1.2}, 0);
    mouthOpen.to('.body', {duration: mouthSpeed, ease: easeType, scaleY: 1.06, transformOrigin: 'center bottom'}, 0);
    mouthOpen.to('.freckles', {duration: mouthSpeed, ease: easeType, y: -10}, 0);
    mouthOpen.to('.ears', {duration: mouthSpeed, ease: easeType, y: 6}, 0);
    mouthOpen.to('.eye-right', {duration: mouthSpeed, ease: easeType, x: -2}, 0);
    mouthOpen.to('.eye-left', {duration: mouthSpeed, ease: easeType, x: 2}, 0);
    mouthOpen.to('.eyes', {duration: mouthSpeed, ease: easeType, y: 2}, 0);
    mouthOpen.to('.nostrils', {duration: mouthSpeed, ease: easeType, y: -6}, 0);

    // ------------
    // Mouse events
    // ------------

    const button = document.querySelector('button');

  if (button) {
    button.addEventListener('mouseenter', this.enterButton);
    button.addEventListener('mouseleave', this.leaveButton);
  }
  }

  enterButton() { 
    gsap.timeline().play(this.mouthOpen);
  }

  leaveButton() { 
    gsap.timeline().reverse(this.mouthOpen);
  }

  earWigglePlay() { 
    this.earWiggle.play(0);
  }

  updateEyePosition(event: MouseEvent, innerEyeWidth: number, innerEyeHeight: number, pupilWidth: number, pupilHeight: number) {
    const eyeLeftPupil = document.querySelector('.eye-left-pupil');
    const eyeRightPupil = document.querySelector('.eye-right-pupil');

    if (eyeLeftPupil && eyeRightPupil && innerEyeWidth !== undefined && innerEyeHeight !== undefined) {
      const posX = ((event.clientX / document.body.clientWidth) * 2 - 1) * ((innerEyeWidth - pupilWidth) / 2);
      const posY = ((event.clientY / document.body.clientHeight) * 2 - 1) * ((innerEyeHeight - pupilHeight) / 2);

      this.renderer.setStyle(eyeLeftPupil, 'transform', `translate(${posX}px, ${posY}px)`);
      this.renderer.setStyle(eyeRightPupil, 'transform', `translate(${posX}px, ${posY}px)`);
    }
  }
}
