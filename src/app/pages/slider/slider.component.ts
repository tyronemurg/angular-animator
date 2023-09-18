import { Component, OnInit, HostListener } from '@angular/core';
declare const gsap: any;
declare const $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit  {
  xPos = 0;

  getBgPos(i: number) {
    return (
      100 -
      (gsap.utils.wrap(
        0,
        360,
        gsap.getProperty(".ring", "rotationY") - 180 - i * 36
      ) /
        360) *
      500 +
      "px 0px"
    );
  }

  ngOnInit() {
    const timeline = gsap.timeline();

    timeline
      .set(".ring", { rotationY: 180, cursor: "grab" })
      .set(".img", {
        rotateY: (i: number) => i * -36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        backgroundImage: (i: number) =>
          "url(https://picsum.photos/id/" + (i + 32) + "/600/400/)",
        backgroundPosition: (i: number) => this.getBgPos(i),
        backfaceVisibility: "hidden"
      })
      .from(".img", {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: "expo"
      })
      .add(() => {
        $(".img").on("mouseenter", (e: Event) => {
          let current = e.currentTarget;
          gsap.to(".img", {
            opacity: (i: number, t: HTMLElement) => (t == current ? 1 : 0.5),
            ease: "power3"
          });
        });
        $(".img").on("mouseleave", (e: Event) => {
          gsap.to(".img", { opacity: 1, ease: "power2.inOut" });
        });
      }, "-=0.5");
  }

  @HostListener('window:mousedown', ['$event'])
  @HostListener('window:touchstart', ['$event'])
  dragStart(e: MouseEvent | TouchEvent) {
    let clientX: number;

    if ('touches' in e) {
      clientX = (e as TouchEvent).touches[0].clientX;
    } else {
      clientX = (e as MouseEvent).clientX;
    }

    this.xPos = Math.round(clientX);
    gsap.set(".ring", { cursor: "grabbing" });
    window.addEventListener('mousemove', this.drag);
    window.addEventListener('touchmove', this.drag);
  }

  @HostListener('window:mouseup', ['$event'])
  @HostListener('window:touchend', ['$event'])
  dragEnd(e: MouseEvent | TouchEvent) {
    window.removeEventListener('mousemove', this.drag);
    window.removeEventListener('touchmove', this.drag);
    gsap.set(".ring", { cursor: "grab" });
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:touchmove', ['$event'])
  drag(e: MouseEvent | TouchEvent) {
    let clientX: number;

    if ('touches' in e) {
      clientX = (e as TouchEvent).touches[0].clientX;
    } else {
      clientX = (e as MouseEvent).clientX;
    }

    gsap.to(".ring", {
      rotationY: "-=" + ((Math.round(clientX) - this.xPos) % 360),
      onUpdate: () => {
        gsap.set(".img", { backgroundPosition: (i: number) => this.getBgPos(i) });
      }
    });

    this.xPos = Math.round(clientX);
  }
}
