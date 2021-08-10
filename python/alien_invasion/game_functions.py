import sys
import pygame


def check_events(ship, ai_settings, screen):
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()

        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_RIGHT:
                ship.moving_right = True
            if event.key == pygame.K_LEFT:
                ship.moving_left = True
        elif event.type == pygame.KEYUP:
            if event.key == pygame.K_RIGHT:
                ship.moving_right = False
            if event.key == pygame.K_LEFT:
                ship.moving_left = False

        # elif event.type == pygame.K_SPACE:
        #     new_bullet = Bullet(ai_settings, screen, ship)
        #     bullets.add(new_bullet)


def update_screen(ship, ai_settings, screen):
    screen.fill(ai_settings.bg_color)
    ship.blitme()
    pygame.display.flip()
    # for bullet in bullets:
    #     bullet.draw_bullet()
