
import game_functions as gf
import pygame
from settings import Settings
from ship import Ship
from pygame.sprite import Group


def run_game():
    pygame.init()
    ai_settings = Settings()
    screen = pygame.display.set_mode(
        (ai_settings.screen_width, ai_settings.screen_height))
    pygame.display.set_caption("外星人入侵")

    # 创建一个飞船
    ship = Ship(screen)

    # 创建一个用与存储子弹的组
    bullets = Group()

    # 创建外星人
    aliens = Group()

    gf.create_fleet(ai_settings, screen, ship, aliens)
    while True:
        gf.check_events(ship, ai_settings, screen, bullets)
        ship.update()
        gf.update_bullets(bullets, aliens)
        gf.update_aliens(ai_settings, aliens)
        gf.update_screen(ship, ai_settings, screen, bullets, aliens)


run_game()
